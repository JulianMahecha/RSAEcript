new Vue({
    el: '#main',
    data: {
        e: '',
        n: '',
        phi: '',
        primo_uno: '',
        primo_dos: '',
        inv:'',
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
        inverso(e, p){
            let val=0;
            do{
                run = 1;
                val+=1;
                result = (val*e)%p
                if(result==1){
                    run=0;
                    console.log(val);
                    return val;
                }
            }while(run)
        },
        prueba: function () {
            this.inv = this.inverso(this.e, this.phi);
            console.log(this.inv)
        },
    }
});