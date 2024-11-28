provider "aws" {
  region = "us-east-1"
}

module "s3" {
  source      = "./modules/s3"
  bucket_name = "finops-frontend-bucket"
}

module "ec2" {
  source             = "./modules/ec2"
  ami_id             = "ami-0c55b159cbfafe1f0"
  instance_type      = "t2.micro"
  key_name           = "my-key-pair"
  security_group_id  = aws_security_group.ec2_sg.id
  instance_profile   = aws_iam_instance_profile.ec2_instance_profile.name
}

module "rds" {
  source            = "./modules/rds"
  allocated_storage = 20
  engine            = "postgres"
  instance_class    = "db.t2.micro"
  db_name           = "finopsdb"
  username          = "admin"
  password          = "password"
}

module "cloudfront" {
  source                 = "./modules/cloudfront"
  s3_bucket_domain_name  = module.s3.bucket_name
  origin_access_identity = "origin-access-identity/cloudfront/E127EXAMPLE51Z"
}

resource "aws_security_group" "ec2_sg" {
  description = "Allow HTTP and SSH access"
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_iam_role" "ec2_instance_role" {
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action    = "sts:AssumeRole"
      Effect    = "Allow"
      Principal = {
        Service = "ec2.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_instance_profile" "ec2_instance_profile" {
  role = aws_iam_role.ec2_instance_role.name
}