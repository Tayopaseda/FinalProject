DROP TABLE ticket;

CREATE TABLE ticket (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    author VARCHAR(255),
    timestamp DATETIME,
    content VARCHAR(255),
    priority VARCHAR(255),
    topic VARCHAR(255),
    status VARCHAR(255),
    trainer VARCHAR(255),
    cohort VARCHAR(255)

);
