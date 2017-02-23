# -*- mode: JavaScript -*-
# vi: set ft=JavaScript :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|    
  config.vm.define "linux_server" do | linux |
	linux.vm.box = "precise64"
    linux.vm.hostname = "linux.server.com"
	linux.vm.network :private_network, ip: "192.168.33.100"
	#linux.vm.network :forwarded_port, guest: 8080, host: 8080
	#linux.vm.network "public_network"
    linux.vm.provider :virtualbox do |vb|
      vb.gui = false       
      vb.memory = "1024"
    end
  end
end

