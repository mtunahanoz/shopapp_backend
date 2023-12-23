import random
import json

# Function to generate a list of pet products with descriptions and size details
def generate_pet_products(num_products=20):
    pet_categories = ['Dog', 'Cat', 'Bird', 'Fish', 'Small Pet']
    product_names = {
        'Dog': ['Dog Leash', 'Chew Toy', 'Dog Bed', 'Dog Shampoo', 'Dog Food'],
        'Cat': ['Catnip Toy', 'Cat Tower', 'Litter Box', 'Cat Food', 'Scratching Post'],
        'Bird': ['Bird Cage', 'Bird Seed', 'Bird Perch', 'Bird Bath', 'Feather Toy'],
        'Fish': ['Aquarium', 'Fish Food', 'Water Filter', 'Tank Decor', 'Algae Cleaner'],
        'Small Pet': ['Hamster Wheel', 'Rabbit Food', 'Guinea Pig Cage', 'Chinchilla Dust Bath', 'Small Pet Bedding']
    }
    detailed_descriptions = {
        'Dog': "designed for durability and your dog’s complete enjoyment.",
        'Cat': "crafted to cater to your cat’s natural instincts and comfort.",
        'Bird': 'perfect for keeping your bird engaged and its environment stimulating.',
        'Fish': "made to enhance the beauty and health of your fish’s habitat.",
        'Small Pet': 'designed with the safety and happiness of your small pet in mind.'
    }
    size_details = {
        'Dog Leash': '5 meters long',
        'Chew Toy': '15 cm in size',
        'Dog Bed': '90x70 cm dimension',
        'Dog Shampoo': '500 ml bottle',
        'Dog Food': '2 kg pack',
        'Catnip Toy': '10 cm in size',
        'Cat Tower': '150 cm in height',
        'Litter Box': '45x35 cm dimension',
        'Cat Food': '1.5 kg pack',
        'Scratching Post': '40 cm in height',
        'Bird Cage': '60x40x40 cm dimension',
        'Bird Seed': '500 g pack',
        'Bird Perch': '30 cm in length',
        'Bird Bath': '20 cm in diameter',
        'Feather Toy': '20 cm in size',
        'Aquarium': '75 liters capacity',
        'Fish Food': '250 g pack',
        'Water Filter': 'suitable for 75 liters tank',
        'Tank Decor': 'various sizes',
        'Algae Cleaner': '300 ml bottle',
        'Hamster Wheel': '20 cm in diameter',
        'Rabbit Food': '1 kg pack',
        'Guinea Pig Cage': '80x50 cm dimension',
        'Chinchilla Dust Bath': '250 ml bottle',
        'Small Pet Bedding': '10 liters pack'
    }
    products = []

    for i in range(1, num_products + 1):
        category = random.choice(pet_categories)
        product_name = random.choice(product_names[category])
        description = f"{product_name}, {detailed_descriptions[category]} Size/Weight/Volume: {size_details[product_name]}."
        product = {
            "id": i,
            "name": product_name,
            "description": description,
            "price": round(random.uniform(5.99, 99.99), 2),
            "pet category": category
        }
        products.append(product)
    
    return products

# Generate final detailed pet products
final_pet_products = generate_pet_products()

# Convert the list to a JSON formatted string
final_pet_products_json = json.dumps(final_pet_products, indent=4)

# Save the JSON data to a file
final_file_path = 'json/pet_products.json'
with open(final_file_path, 'w') as file:
    file.write(final_pet_products_json)

final_file_path

