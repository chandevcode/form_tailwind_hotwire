json.extract! contact, :id, :name, :email, :age, :created_at, :updated_at
json.url contact_url(contact, format: :json)
