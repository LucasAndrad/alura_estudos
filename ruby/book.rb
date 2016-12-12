class Book
	attr_reader :title, :year, :price, :has_redefinition	
	
	def initialize(title, price, year, has_redefinition)
		@title = title
		@year = year
		@price = calc(price)
		@has_redefinition = has_redefinition
	end
	
	def cheap
		"The book #{@title} is only R$ #{@price}\nFrom: #{@year}\n\n"
	end
	
	def expensive
		"Title: #{@title}\nPrice: R$ #{@price} From: #{@year}\n\n"
	end
	
	private
	
		def calc(p)
			if @year < 2006
				if has_redefinition
					return p*0.8
				else
					return p*0.85
				end
				
			elsif @year < 2011
				return p*0.90
			else 
				return p
			end				
		end

end

class Stock
	attr_reader :books
	
	def initialize
		@books = []
	end
	
	def cheaper_than(value)
		@books.select do |b|
			if b.price <= value
				puts b.cheap
			else
			end
		end
	end
	
	def expensive_than(value)
		@books.select do |b|
			if b.price >= value
				puts b.expensive
			else
			end
		end 
	end
	
	def total
		puts "Total of books in stock = #{@books.size}"
	end
	
	def add(book)
		# add book if is a book valid
		@books << book if book
	end
end

rails_book = Book.new('Ruby on Rails 4', 100, 2015, true)
math = Book.new('Math 1', 100, 1998, true)
html_book = Book.new('HTML 5', 100, 2009, true)

stock = Stock.new
stock.add rails_book 
stock.add math 
stock.add html_book
stock.add Book.new('Java', 140, 1999, true)
stock.add Book.new('Phyton', 40, 2008, false)
stock.add nil

stock.cheaper_than(10)
stock.expensive_than(101)
stock.total
