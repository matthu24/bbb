# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Bench.destroy_all

u1 = User.create!(username: "Guest", password: "password")

b1 = Bench.create!(description: "Four Barrel Coffee", lat: 37.767019, lng: -122.421961)
b2 = Bench.create!(description: "Sightglass Coffee", lat: 37.7673765, lng: -122.4243311)
b3 = Bench.create!(description: "Bisou Bistronomy", lat: 37.7630065 lng: -122.4365125 )
