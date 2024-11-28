resource "aws_db_instance" "rds_instance" {
  allocated_storage    = var.allocated_storage
  engine               = var.engine
  instance_class       = var.instance_class
  name                 = var.db_name
  username             = var.username
  password             = var.password
  skip_final_snapshot  = true
}

output "rds_endpoint" {
  value = aws_db_instance.rds_instance.endpoint
}