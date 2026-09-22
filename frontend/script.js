const modal = document.getElementById('Modallogin');
const btnAbrir = document.getElementById('btn-login');
const formLogin = document.getElementById('formLogin');
const btnCancelar = document.getElementById('btn-cancelar');
const btnperfil = document.getElementById('btn-perfil');


btnperfil.addEventListener('click', () => {
    modal.showModal();
});

btnAbrir.addEventListener('click', () => {
    modal.showModal();
});

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (!email.includes('@') || !email.includes('.')) {
        alert('Digite um e-mail válido.');
        return;
    }

    console.log("Email:", email);
    console.log("Senha:", senha);

    modal.close();


});

btnCancelar.addEventListener('click', () => {
    modal.close();
});