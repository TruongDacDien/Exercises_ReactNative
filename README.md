# Test Data for Student and Subjects

This repository contains sample data for students and their respective subjects. This data can be used for testing purposes in applications related to student management and scheduling.

## Students Data
```javascript
const students = [
  {
    idStudent: 1,
    username: "Student1",
    password: "123"
  },
  {
    idStudent: 2,
    username: "Student2",
    password: "321"
  }
];
```

## Subjects Data
```javascript
const subjects = [
  {
    idSubject: 1,
    idStudent: 1,
    name: "Giải tích",
    code: "MA006.N110",
    teacher: "Phùng Minh Đức",
    day: "Thứ 2",
    time: "Tiết 1-5",
    room: "B3.20",
    start: "03/10/22",
    end: "11/02/23"
  },
  {
    idSubject: 2,
    idStudent: 1,
    name: "Đại số tuyến tính",
    code: "MA003.N110",
    teacher: "Đặng Lê Thúy",
    day: "Thứ 3",
    time: "Tiết 6-9",
    room: "B1.22",
    start: "03/10/22",
    end: "11/02/23"
  },
  {
    idSubject: 3,
    idStudent: 1,
    name: "Nhập môn lập trình",
    code: "IT001.N110",
    teacher: "Bùi Cao Doanh",
    day: "Thứ 4",
    time: "Tiết 1-4",
    room: "C309",
    start: "03/10/22",
    end: "11/02/23"
  },
  {
    idSubject: 4,
    idStudent: 1,
    name: "Tổ chức và Cấu trúc Máy tính",
    code: "IT012.N11",
    teacher: "Ngô Hiếu Trường",
    day: "Thứ 6",
    time: "Tiết 6-9",
    room: "B3.14",
    start: "03/10/22",
    end: "11/02/23"
  },
  {
    idSubject: 5,
    idStudent: 2,
    name: "Nhập môn mạng máy tính",
    code: "B3.20",
    teacher: "Thái Huy Tân",
    day: "Thứ 2",
    time: "Tiết 1-3",
    room: "B3.20",
    start: "11/09/23",
    end: "30/12/23"
  },
  {
    idSubject: 6,
    idStudent: 2,
    name: "Lập trình trực quan",
    code: "IT008.O13",
    teacher: "Nguyễn Thị Xuân Hương",
    day: "Thứ 3",
    time: "Tiết 1-3",
    room: "C309",
    start: "11/09/23",
    end: "30/12/23"
  },
  {
    idSubject: 7,
    idStudent: 2,
    name: "Cơ sở dữ liệu",
    code: "IT004.O117",
    teacher: "Nguyễn Đình Loan Phương",
    day: "Thứ 5",
    time: "Tiết 6-9",
    room: "B5.12",
    start: "11/09/23",
    end: "02/12/23"
  },
  {
    idSubject: 8,
    idStudent: 2,
    name: "Hệ điều hành",
    code: "IT007.O18",
    teacher: "Trần Ngọc Đức",
    day: "Thứ 6",
    time: "Tiết 6-8",
    room: "C309",
    start: "11/09/23",
    end: "30/12/23"
  }
];
```

## Exporting Data
```javascript
export { students, subjects };
```

## Usage
You can import these test data into your project and use them to simulate student login, subject retrieval, and scheduling features.
```javascript
import { students, subjects } from './Data';
```

## License
This dataset is for testing and development purposes only. Do not use real student information in production environments.

