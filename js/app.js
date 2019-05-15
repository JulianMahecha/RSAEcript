new Vue({
    el: '#main',
    data: {
        e: '',
        n: '',
        phi: '',
        primo_uno: '',
        primo_dos: '',
        priv_inv:'',
        mostrar: false,
        active: false
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
            this.phi = (p1 - 1) * (p2 - 2);


            while (this.mcdOperacion(this.phi, this.e) != 1) {
                this.e = Math.trunc(Math.random() * (this.phi - 1) + 1);
            }

            this.priv_inv = this.euclides(this.e, this.phi);
            console.log(this.priv_inv)
        },
        generar: function () {
            this.n = '';
            this.phi = '';
            this.e = '';
            this.primo_uno = this.generaAleatorio();
            this.primo_dos = this.generaAleatorio();
            while (this.primo_uno == this.primo_dos) {
                this.primo_uno = this.generaAleatorio();
            }
        },
        generaAleatorio: function () {
            let decOpt = 100000000;
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
        euclides: function (a, b) {
            var iaux; //auxiliar
            a = Math.abs(a); //tomamos valor absoluto
            b = Math.abs(b);
            var i1 = Math.max(a, b); //i1 = el más grande
            var i2 = Math.min(a, b); //i2 = el más pequeño

            do {
                iaux = i2; //guardar divisor
                i2 = i1 % i2; //resto pasa a divisor
                i1 = iaux; //divisor pasa a dividendo
            } while (i2 !== 0);
            return i1; //ultimo resto no nulo
        },
        prueba: function () {
            this.adv = true;
        },
    }
});