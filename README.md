# microservices_autumn

## Who made services
Команда №12
1. Auth service - Стельмашенко Максим ІП-01
2. File service - Ніколаєв Іван ІП-01
3. Shedule service - Шпилька Владислав ІП-01
4. Profile service - Онацький Микита ІА-04

## Pre-installation
1. Install docker: [link](https://docs.docker.com/engine/install/)
2. Install kubectl and minikube: [link](https://kubernetes.io/docs/tasks/tools/)

## Main pipeline
To run script:
``` 
bash start-services.sh
```

To delete script:
``` 
bash delete-services.sh
```
## Endpoints
### FileManager
#### GET
(GET FILE) http://localhost:80/api/file-service/file/:id

#### POST
(CREATE FILE/FILES) http://localhost:80/api/file-service/file + Form Data with field 'files'

#### DELETE
(DELETE FILE) http://localhost:80/api/file-service/file/:id

### Shedule
#### GET
http://localhost:80/api/schedule/:id (Get schedule) <br/>
http://localhost:80/api/schedule/scheduleslot/:id (Get schedule-slot) <br/>
http://localhost:80/api/schedule/slot/:id (Get slot) <br/>

#### POST
http://localhost:80/api/schedule/ (Create schedule)
```
{
    "year": 2022
}
```

http://localhost:80/api/schedule/scheduleslot/ (Create schedule-slot)
```
{
    "schedule_id": :schedule_id,
    "slot_id": :slot_id,
    "student_id": "3",
    "course_id": "2"
}
```

http://localhost:80/api/schedule/slot/ (Get slot)
```
{
    "day": "Sunday",
    "begin_time": "15:00:00",
    "end_time": "17:00:00"
}
```

#### PUT
http://localhost:80/api/schedule/:id (Update schedule) <br/>
http://localhost:80/api/schedule/scheduleslot/:id (Update schedule-slot) <br/>
http://localhost:80/api/schedule/slot/:id (Update slot) <br/>

#### DELETE
http://localhost:80/api/schedule/:id (Delete schedule) <br/>
http://localhost:80/api/schedule/scheduleslot/:id (Delete schedule-slot) <br/>
http://localhost:80/api/schedule/slot/:id (Delete slot) <br/>

#### Instructions
At the beginning, we need to create slot and schedule with post request and only then schedule-slot because schedule-slot has foreign key.
Then we can use other methods

### Auth
#### POST
http://localhost:80/api/auth/login <br/>
http://localhost:80/api/auth/register <br/>
http://localhost:80/api/auth/logout <br/>

### Profile
#### GET
http://localhost:80/api/profile/ (Get All) <br/>
http://localhost:80/api/profile/:id <br/>

#### POST
http://localhost:80/api/profile/
```
{
    "login": "string",
    "password": "string",
    "first_name": "string",
    "last_name": "string",
    "birth_date": "2020-03-19T14:21:00+02:00"
}
```

#### PATCH
http://localhost:80/api/profile/:id/name
```
{
    "first_name": "string1123123",
    "last_name": "123123aasdsdasd"
}
```

#### DELETE
http://localhost:80/api/profile/:id