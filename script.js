document.addEventListener("DOMContentLoaded", function () {

  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  const links = document.querySelectorAll(".nav-list a");

  links.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      navList.classList.remove("show");
      localStorage.setItem("menuOpen", false);

      const href = this.getAttribute("href");
      setTimeout(() => window.location.href = href, 300);
    });
  });

  const wasOpen = localStorage.getItem("menuOpen") === "true";
  if (wasOpen) {
    navList.classList.add("show", "no-animate");
    navToggle.classList.add("open", "no-animate");
    setTimeout(() => {
      navList.classList.remove("no-animate");
      navToggle.classList.remove("no-animate");
    }, 50);
  }

  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
    navToggle.classList.toggle('open');
    localStorage.setItem("menuOpen", navList.classList.contains("show"));
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});

// WhatsApp Chat Widget

document.addEventListener("DOMContentLoaded", () => {

  const chatToggle = document.getElementById("chatToggle");
  const chatPopup = document.getElementById("chatPopup");
  const closeChat = document.getElementById("closeChat");
  const sendWhatsApp = document.getElementById("sendWhatsApp");

  if (chatToggle) {
    chatToggle.addEventListener("click", () => {
      chatPopup.classList.toggle("active");
    });
  }

  if (closeChat) {
    closeChat.addEventListener("click", () => {
      chatPopup.classList.remove("active");
    });
  }

  const sendSMS = document.getElementById("sendSMS");
  const sendEmail = document.getElementById("sendEmail");

function getFormData() {

  const name =
  document.getElementById("waName").value.trim();

const phone =
  document.getElementById("waPhone").value.trim();

const email =
  document.getElementById("waEmail").value.trim();

const message =
  document.getElementById("waMessage").value.trim();

  if (!name || !phone || !email || !message) {
    alert("Please fill out all fields.");
    return null;
  }

  return {
  text:
`New Contact Request - Cornerstone Fellowship

Name: ${name}

Phone: ${phone}

Email: ${email}

Question:
${message}`
};
}

if (sendWhatsApp) {
  sendWhatsApp.addEventListener("click", () => {

    const data = getFormData();
    if (!data) return;

    const whatsappURL =
`https://wa.me/13024649198?text=${encodeURIComponent(data.text)}`;

    window.open(whatsappURL, "_blank");
  });
}

if (sendSMS) {
  sendSMS.addEventListener("click", () => {

    const data = getFormData();
    if (!data) return;

    const smsURL =
`sms:+13024649198?body=${encodeURIComponent(data.text)}`;

    window.location.href = smsURL;
  });
}

if (sendEmail) {
  sendEmail.addEventListener("click", () => {

    const data = getFormData();
    if (!data) return;

    const subject =
      encodeURIComponent("New Contact Request - Cornerstone Fellowship");

    const body =
      encodeURIComponent(data.text);

    const emailURL =
`mailto:cornerstone.delaware@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = emailURL;
  });
}
  
});







