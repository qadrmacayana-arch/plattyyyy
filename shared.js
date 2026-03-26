const legalContent = {
  terms: {
    title: 'Terms and Conditions',
    content: `
      <h4 style="color: var(--primary); margin-top: 1rem; margin-bottom: 0.5rem;">1. Rental Agreement</h4>
      <p>This agreement is between SmartDrive™ ('the Company') and the renter. By renting a vehicle, the renter agrees to all terms and conditions. The renter must be at least 21 years old and possess a valid driver's license recognized in the Philippines.</p>
      <h4 style="color: var(--primary); margin-top: 1rem; margin-bottom: 0.5rem;">2. Vehicle Use</h4>
      <p>The vehicle shall not be used for any illegal purpose, for racing, or outside the designated geographical limits without prior consent. The renter is responsible for all traffic violations and fines incurred during the rental period.</p>
      <h4 style="color: var(--primary); margin-top: 1rem; margin-bottom: 0.5rem;">3. Payment and Charges</h4>
      <p>All rental charges are to be paid in Philippine Peso (PHP). A security deposit is required upon vehicle pick-up. The final rental cost will include the daily rate, insurance, and any additional services availed. Late returns will be charged at 1.5x the daily rate.</p>
      <h4 style="color: var(--primary); margin-top: 1rem; margin-bottom: 0.5rem;">4. Insurance and Liability</h4>
      <p>All vehicles are covered by Comprehensive Insurance as mandated by Philippine law. In case of an accident, the renter is liable for a participation fee. The renter is responsible for any damage not covered by the insurance.</p>
      <h4 style="color: var(--primary); margin-top: 1rem; margin-bottom: 0.5rem;">5. Governing Law</h4>
      <p>This agreement shall be governed by the laws of the Republic of the Philippines. Any disputes shall be settled in the courts of Quezon City, Philippines.</p>
    `
  },
  privacy: {
    title: 'Privacy Policy',
    content: `
      <p>This Privacy Policy is in compliance with the Republic Act No. 10173, also known as the Data Privacy Act of 2012 of the Philippines.</p>
      <h4 style="color: var(--primary); margin-top: 1rem; margin-bottom: 0.5rem;">1. Information We Collect</h4>
      <p>We collect personal information such as your name, email address, contact number, birthday, address, and driver's license details upon registration and booking. We also collect non-personal data like browsing behavior to improve our services.</p>
      <h4 style="color: var(--primary); margin-top: 1rem; margin-bottom: 0.5rem;">2. Use of Information</h4>
      <p>Your data is used to process bookings, facilitate payments, communicate with you, and improve our platform. We may use your information for marketing purposes, from which you can opt-out at any time.</p>
      <h4 style="color: var(--primary); margin-top: 1rem; margin-bottom: 0.5rem;">3. Data Sharing and Security</h4>
      <p>We do not sell your personal data. We may share your information with trusted third-party partners (e.g., payment gateways) only for the purpose of providing our services. We implement robust security measures to protect your data from unauthorized access.</p>
      <h4 style="color: var(--primary); margin-top: 1rem; margin-bottom: 0.5rem;">4. Your Rights as a Data Subject</h4>
      <p>Under the Data Privacy Act of 2012, you have the right to access, correct, and erase your personal data. For any inquiries or to exercise your rights, please contact our Data Protection Officer at <a href="mailto:dpo@smartdrive.com" style="color: var(--primary);">dpo@smartdrive.com</a>.</p>
      <h4 style="color: var(--primary); margin-top: 1rem; margin-bottom: 0.5rem;">5. Contact Information</h4>
      <p>For any privacy-related concerns, you may contact us at our office located near the Technological Institute of the Philippines, Quezon City, or via email.</p>
    `
  }
};

document.addEventListener('DOMContentLoaded', () => {
    const legalModal = document.getElementById('legal-modal');
    const closeLegalModalBtn = document.getElementById('close-legal-modal');
    const legalModalTitle = document.getElementById('legal-modal-title');
    const legalModalBody = document.getElementById('legal-modal-body');

    function openLegalModal(type) {
        if (legalModal && legalContent[type]) {
            if(legalModalTitle) legalModalTitle.textContent = legalContent[type].title;
            if(legalModalBody) legalModalBody.innerHTML = legalContent[type].content;
            legalModal.style.display = 'flex';
        }
    }

    document.querySelectorAll('.legal-link').forEach(link => {
        link.addEventListener('click', function(e) { e.preventDefault(); openLegalModal(this.getAttribute('data-content')); });
    });

    if(closeLegalModalBtn) closeLegalModalBtn.addEventListener('click', () => { legalModal.style.display = 'none'; });
    window.addEventListener('click', (event) => { if (event.target === legalModal) { legalModal.style.display = 'none'; } });
});

// --- Mobile Menu Logic (Centralized) ---
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        mobileMenu.querySelectorAll('a, button').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }
});

// --- Auth Logic (Centralized) ---
function updateAuthButtons() {
    const user = JSON.parse(sessionStorage.getItem('user') || 'null');
    const navActions = document.getElementById('auth-buttons');
    const mobileAuthLinks = document.getElementById('mobile-auth-links');

    if (navActions) {
        if (user) {
            navActions.innerHTML = `<button onclick="logout()" class="btn-login" style="background: none; border: none; cursor: pointer;">Logout</button>`;
        } else {
            navActions.innerHTML = `<a href="login.html" class="btn-login">Login</a><a href="signup.html" class="btn-signup">Sign Up</a>`;
        }
    }

    if (mobileAuthLinks) {
        // This part can be customized further if mobile layout differs significantly
        mobileAuthLinks.innerHTML = navActions.innerHTML;
    }
}

function logout() {
    sessionStorage.removeItem('user');
    window.location.href = 'index.html';
}

// Initialize auth buttons on all pages that include this script
document.addEventListener('DOMContentLoaded', updateAuthButtons);

// --- Shared Wallet Transaction Logic ---
function getTransactionHistory(userEmail) {
  return JSON.parse(localStorage.getItem(`wallet_history_${userEmail}`) || '[]');
}

function addTransaction(userEmail, description, amount) {
  const history = getTransactionHistory(userEmail);
  const newTransaction = {
    date: new Date().toISOString(),
    description,
    amount
  };
  history.unshift(newTransaction); // Add to the beginning
  localStorage.setItem(`wallet_history_${userEmail}`, JSON.stringify(history));
}

// --- Toast Notification System (Centralized) ---
function showToast(message, type = 'success') {
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let backgroundColor;
  switch(type) {
    case 'success':
      backgroundColor = 'var(--primary)';
      break;
    case 'error':
      backgroundColor = 'var(--destructive)';
      break;
    case 'info':
    default:
      backgroundColor = '#3b82f6'; // A neutral blue
      break;
  }

  toast.style.cssText = `
    position: fixed; bottom: 2rem; right: 2rem;
    background-color: ${backgroundColor};
    color: white;
    padding: 1rem 1.5rem; border-radius: 0.75rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    z-index: 1000; animation: slideIn 0.3s ease-out;
    max-width: 400px; word-wrap: break-word;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 4000);
}