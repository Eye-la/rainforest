# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# User.destroy_all
# Product.destroy_all

User.destroy_all
Product.destroy_all

User.create!({
  email: "example@bitmakerlabs.com",
  password: "pass",
  password_confirmation: "pass"
  }
)

100.times do |i|

Product.create({
  name: Faker::Commerce.product_name,
  description: Faker::Company.bs,
  price_in_cents: rand(1..100)
  }
)
print "|"
end