// polymorphism => same methods having multiple forms

// 1.method overloading - same class same methods with different parameters
// 2. method overriding - different class same method


class Worldbank{
    loan(){
        console.log('i am loan from wb')
    }
    save(){
        console.log('i am save from wb')
    }
}

class SBI extends Worldbank{
    loan(){
        console.log('i am loan from sbi')
    }
    save(){
        console.log('i am save from sbi')
    }
}

class PNB extends Worldbank{
    loan(){
        console.log('i am loan from pnb')
        super.loan()
    }
    
    save(){
        console.log('i am save from pnb')
        super.save()
    }
}

let pnb = new PNB()
pnb.save()
pnb.loan()

let sbi = new SBI()
sbi.save()
sbi.loan()