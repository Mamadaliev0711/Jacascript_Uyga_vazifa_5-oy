function getUserInfo() {
  let ismi = prompt("Ismingizni kiriting:");
  let familyasi = prompt("Familyangizni kiriting:");
  let yosh = prompt("Yoshingizni kiriting:");
  let email = prompt("Elektron pochtangizni kiriting:");

  displayUserInfo(ismi, familyasi, yosh, email);
}
function displayUserInfo(ismi, familyasi, yosh, email) {
  let userInfoDis = document.getElementById("userInfo");
  userInfoDis.innerHTML = `
      <h2>Foydalanuvchi Ma'lumotlari</h2>
      <p><strong>Ism:</strong> ${ismi}</p>
      <p><strong>Familya:</strong> ${familyasi}</p>
      <p><strong>Yosh:</strong> ${yosh}</p>
      <p><strong>Email:</strong> ${email}</p>
    `;
}
