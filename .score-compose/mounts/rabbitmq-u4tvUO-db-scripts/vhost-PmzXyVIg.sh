rabbitmqctl list_vhosts | grep vhost-PmzXyVIg || rabbitmqctl add_vhost vhost-PmzXyVIg
rabbitmqctl list_users | grep user-LBvtnVBD || rabbitmqctl add_user user-LBvtnVBD Sdd9htnvnjPBPdkg
rabbitmqctl set_user_tags user-LBvtnVBD administrator
rabbitmqctl set_permissions -p vhost-PmzXyVIg user-LBvtnVBD ".*" ".*" ".*"
rabbitmqctl set_topic_permissions -p vhost-PmzXyVIg user-LBvtnVBD ".*" ".*" ".*"