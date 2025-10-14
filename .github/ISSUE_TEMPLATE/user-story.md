# This is a comment in YAML
--- # Optional start of a YAML document

application:
  name: MyAwesomeApp
  version: 1.0.0
  environment: production

database:
  type: postgresql
  host: localhost
  port: 5432
  username: admin
  password: securepassword
  # A list of allowed tables
  allowed_tables:
    - users
    - products
    - orders

features:
  # Boolean values
  enable_logging: true
  enable_analytics: false

users:
  # A list of dictionaries (objects)
  - id: 1
    name: Alice
    email: alice@example.com
  - id: 2
    name: Bob
    email: bob@example.com

# Multi-line string using the pipe (|) for literal block style
welcome_message: |
  Welcome to MyAwesomeApp!
  We hope you enjoy your experience.
  This message spans multiple lines.

# Multi-line string using the greater-than (>) for folded block style
# This will fold newlines into spaces, unless explicitly indented
long_description: >
  This is a very long description that will be
  folded into a single line when parsed,
  unless there are blank lines or explicit
  indentation changes within the block.

... # Optional end of a YAML document
