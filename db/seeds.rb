# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Blog.destroy_all
User.destroy_all
Category.destroy_all

@admin = User.create!(username: 'timkev', email: 'sparrow@email.com', password: '123456')
@admin1 = User.create!(username: 'kev', email: 'kev@email.com', password: '123456')
@admin2 = User.create!(username: 'tim', email: 'tim@email.com', password: '123456')
@admin3 = User.create!(username: 'christian', email: 'christian@email.com', password: '123456')

puts "#{User.count} user(s) created"

@personal_finance = Category.create!(name: "Personal Finance")
@covid_impact = Category.create!(name: "COVID-Impact")
@news_events = Category.create!(name: "News Events")
@financial_calculator = Category.create!(name: "Finance Calculator")

puts "#{Category.count} categories created"

@test_blog = Blog.create!(title: "test", picture: "URL", body: "this is a test", user: @admin)

puts "#{Blog.count} blogs created"

@personal_finance.blogs << @test_blog