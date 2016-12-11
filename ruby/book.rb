class Book
	attr_reader :title, :year, :price, :has_redefinition	
	
	def initialize(title, price, year, has_redefinition)
		@title = title
		@year = year
		@price = calc(price)
		@has_redefinition = has_redefinition
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
				puts "The book #{b.title} is only R$ #{b.price}\nFrom: #{b.year}\n\n"
			else
			end
		end
	end
	
	def expensive_than(value)
		@books.select do |b|
			if b.price >= value
				puts "Title: #{b.title}\nPrice: R$ #{b.price} From: #{b.year}\n\n"
			else
			end
		end 
	end
	
	def total
		@books.size
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
stock.books << rails_book << math << html_book
stock.books << Book.new('Java', 140, 1999, true)
stock.books << Book.new('Phyton', 40, 2008, false)


stock.cheaper_than(89)
stock.expensive_than(100)
