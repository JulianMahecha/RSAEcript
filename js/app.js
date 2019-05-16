new Vue({
    el: '#main',
    data: {
        e: '',
        n: '',
        phi: '',
        primo_uno: '',
        primo_dos: '',
        inv: '',
        mostrar: false,
        active: false,
        c_publica:'',
        c_privada:''
    },
    /* Methods */
    methods: {
        addName: function () {
            this.people.push(this.name);
            this.name = '';
        },
        calcular: function () {
            let p1 = this.primo_uno;
            let p2 = this.primo_dos;

            this.n = p1 * p2;
            this.phi = (p1 - 1) * (p2 - 1);


            while (this.mcdOperacion(this.phi, this.e) != 1) {
                this.e = Math.trunc(Math.random() * (this.phi - 1) + 1);
            }


        },
        generar: function () {
            this.n = '';
            this.phi = '';
            this.e = '';
            this.inv = '';
            if (this.primo_uno && this.primo_dos) {
                let r = confirm("Se borraran los datos");
                if (r) {
                    this.primo_uno = this.generaAleatorio();
                    this.primo_dos = this.generaAleatorio();
                    while (this.primo_uno == this.primo_dos) {
                        this.primo_uno = this.generaAleatorio();
                    }
                }
            } else {
                this.primo_uno = this.generaAleatorio();
                this.primo_dos = this.generaAleatorio();
                while (this.primo_uno == this.primo_dos) {
                    this.primo_uno = this.generaAleatorio();
                }
            }
        },
        generaAleatorio: function () {
            let decOpt = 100;
            do {
                primo = true;
                n1 = Math.trunc(Math.ceil(Math.random() * decOpt)) + 1;
                for (let index = 2; index < n1; index++) {
                    if (n1 % index == 0) {
                        primo = false;
                        continue;
                    }
                }
            } while (!primo);
            return n1;
        },
        mcdOperacion: function (x, y) {
            x = Math.abs(x);
            y = Math.abs(y);
            while (y) {
                var t = y;
                y = x % y;
                x = t;
            }
            return x;
        },
        encenderBoton: function () {
            this.mostrar = true;
        },
        inverso(e, p) {
            let val = 0;
            do {
                run = 1;
                val += 1;
                result = (val * e) % p
                if (result == 1) {
                    run = 0;
                    return val;
                }
            } while (run)
        },
        calcInverso: function () {
            this.inv = this.inverso(this.e, this.phi);
            this.fClaves();
        },
        fClaves: function (){
            this.c_publica = `(${this.e}, ${this.n})`;
            this.c_privada = `(${this.inv}, ${this.n})`;
            console.log(this.c_publica);
        }
    }
});