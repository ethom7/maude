provider "aws" {
  profile = "default"
  region  = "us-east-1"
}

#Optional - If you wish to keep track of your current state instead of a local machine
terraform {
  backend "s3" {
    region         = "us-east-1"
    bucket         = "my-state-bucket"
    key            = "terraform.tfstate"
    encrypt        = true
  }
}

module "static_website" {
  source = "git@github.com:ethom7/.git"
  site_bucket_name = "name-for-our-s3-bucket"
  domain_name = "my-domain.com"
  cdn_price_class="PriceClass_100"
}
