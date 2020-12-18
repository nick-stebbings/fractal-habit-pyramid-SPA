# db.rb
Bix::Application.boot(:db) do
  init do
    require "rom"
    require "rom-sql"
    
    options = { adapter: :postgres,
      :host => ENV['HOST'],
      port: ENV['PORT'], 
      database: ENV['DATABASE_NAME'], 
      user: ENV['DATABASE_USER'], 
      password: ENV['DATABASE_PASS'],
      extensions: %i[pg_timestamptz]
    }

    connection = Sequel.connect(options)
    register('db.connection', connection)
    register('db.config', ROM::Configuration.new(:sql, connection))
  end
end