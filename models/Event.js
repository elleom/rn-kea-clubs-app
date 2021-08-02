class Event {
    constructor(id, userId, type, title, description, image, startDate, endDate,
    location, organization) {
        this.id = id;
        this.userId = userId; //
        this.type = type;
        this.title = title;
        this.description = description;
        this.image = image;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.organization = organization;
    }
}

export default Event;
