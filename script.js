const login_btn = document.querySelector('.login_btn');
        const log_btn = document.querySelector('.log_btn');
        const sign_up = document.querySelector('.sign-up"');

        sign_up.addEventListener('click',()=> {
            login_btn.classList.add('active');
        });
        log_btn.addEventListener('click',()=> {
            login_btn.classList.remove('active');
        });