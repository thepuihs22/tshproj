class CustomerModel
{
	constructor(first_name, last_name, email, zipcode)
	{
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.zipcode = zipcode;
		this.uid = null;
	}
}

module.exports = CustomerModel;
