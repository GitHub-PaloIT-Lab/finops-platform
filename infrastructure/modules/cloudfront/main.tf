resource "aws_cloudfront_distribution" "frontend_distribution" {
  origin {
    domain_name = var.s3_bucket_domain_name
    origin_id   = "S3FrontendOrigin"

    s3_origin_config {
      origin_access_identity = var.origin_access_identity
    }
  }

  enabled             = true
  default_cache_behavior {
    target_origin_id       = "S3FrontendOrigin"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

output "distribution_id" {
  value = aws_cloudfront_distribution.frontend_distribution.id
}