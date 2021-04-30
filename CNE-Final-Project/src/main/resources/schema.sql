DROP TABLE IF EXISTS ticket;

CREATE TABLE ticket (
    id INT AUTO_INCREMENT,
    trainee VARCHAR(255),
    cohort VARCHAR(255),
    title VARCHAR(255),
    _description VARCHAR(1000),
    topic VARCHAR(255),
    completed BOOLEAN,
    trainer VARCHAR(255),
    date_time VARCHAR(255),
    PRIMARY KEY(id)
);
