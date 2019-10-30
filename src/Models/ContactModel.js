function ContactModel(args){
    this.id = args ? args.id : null;
    this.name = args ? args.name : null;
    this.email = args ? args.email : null;
    this.mobile = args ? args.mobile : null;
    this.landline = args ? args.landline : null;
    this.website = args ? args.website : null;
    this.address = args ? args.address : null;
}

export default ContactModel