# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

@admin = User.create!(username: 'timkev', email: 'sparrow@email.com', password: '123456')
@admin1 = User.create!(username: 'kev', email: 'kev@email.com', password: '123456')
@admin2 = User.create!(username: 'tim', email: 'tim@email.com', password: '123456')
@admin3 = User.create!(username: 'christian', email: 'christian@email.com', password: '123456')

puts "#{User.count} user(s) created"
