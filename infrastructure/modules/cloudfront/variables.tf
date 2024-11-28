variable "s3_bucket_domain_name" {
  description = "The domain name of the S3 bucket"
  type        = string
}

variable "origin_access_identity" {
  description = "The origin access identity for the CloudFront distribution"
  type        = string
}