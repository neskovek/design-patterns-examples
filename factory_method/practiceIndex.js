// Classes concretas
class DebitCard {
    pay(type, amount) {
      console.log(`Pagando com ${type} no valor de R$ ${amount}`);
    }
}
  
class CreditCard {
    pay(type, amount) {
      console.log(`Pagando com ${type} no valor de R$ ${amount}`);
    }
}

class PaymentMethodFactory {
    static types = {
        debit: DebitCard,
        credit: CreditCard
    };

    static createPaymentMethod (type) {
        const PaymentMethodClass = this.types[type];

        if (!PaymentMethodClass) {
            throw new Error('Selecione um método válido.');
        }

        return new PaymentMethodClass();
    };
}

function main () {
    const methods = [
        {
            "type": "credit",
            "amount": 500
        },
        {
            "type": "debit",
            "amount": 300
        }
    ];

    try {
        methods.forEach((type, amount) => {
        const method = PaymentMethodFactory.createPaymentMethod(type);
        method.send(type, amount);
      });
    } catch (err) {
      console.error("Erro ao enviar...", err.message);
    }
};

main();