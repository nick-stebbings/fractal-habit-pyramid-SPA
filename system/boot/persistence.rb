Hht::Container.boot(:persistence, namespace: true) do |app|
  rom_config = app['db.config']

  start do
    rom_config.auto_registration(app.root.join("lib/persistence"))
    register('container', ROM.container(rom_config))
  end
end