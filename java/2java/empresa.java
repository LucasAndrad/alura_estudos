class Funcionario {
	private String nome;
	protected double salario;

	public void setSalario(double salario) {
		this.salario = salario;
	}

	public double getBonus() {
		return this.salario*0.2;
	}
}

class Gerente extends Funcionario {
	public double getBonus() {
		return this.salario*0.3;
	}
}

class Dev extends Funcionario {
	public double getBonus() {
		return this.salario*0.25;
	}
}

class BonusTotal {
	private double total = 0;
	
	public void addBonus(Funcionario funcionario) {
		total += funcionario.getBonus();
	}

	public void informTotal() {
		System.out.println(total);
	}
}

class TestaFuncionario {
	public static void main(String[] args) {
		Funcionario joao = new Funcionario();
		joao.setSalario(1000);
		System.out.println(joao.getBonus());

		Gerente joaquim = new Gerente();
		joaquim.setSalario(2000);
		System.out.println(joaquim.getBonus());

		BonusTotal bonusTotal = new BonusTotal();
		bonusTotal.addBonus(joao);
		bonusTotal.addBonus(joaquim);
		bonusTotal.informTotal();

	}
}