output "test-vm" {
  value = aws_security_group.test-vm.id
}

output "prod-db" {
  value = aws_security_group.prod-db.id
}
