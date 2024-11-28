resource "aws_instance" "backend_instance" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = var.key_name

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install -y nodejs npm git
              git clone https://github.com/your-repo/finops-platform.git
              cd finops-platform
              npm install
              npm start
              EOF

  vpc_security_group_ids = [var.security_group_id]
  iam_instance_profile   = var.instance_profile
}

output "instance_id" {
  value = aws_instance.backend_instance.id
}