const students = [
  { idStudent: 1, username: "Student1", password: "123" },
  { idStudent: 2, username: "Student2", password: "321" }
];

const subjects = [
  // Subjects for Student 1
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

  // Subjects for Student 2
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
  },
];

const todolists = [
  // Todos for Student 1
  { idTodo: 1, idStudent: 1, deadlineTime: '23:59', deadlineDay: '10/04/2025', todoContent: 'Hoàn thành bài tập Giải tích tuần 3' },
  { idTodo: 2, idStudent: 1, deadlineTime: '20:00', deadlineDay: '12/04/2025', todoContent: 'Ôn tập chương 2 Đại số tuyến tính' },
  { idTodo: 3, idStudent: 1, deadlineTime: '18:30', deadlineDay: '15/04/2025', todoContent: 'Viết code bài tập Nhập môn lập trình' },
  { idTodo: 4, idStudent: 1, deadlineTime: '21:45', deadlineDay: '17/04/2025', todoContent: 'Tóm tắt lý thuyết về Cấu trúc Máy tính' },

  // Todos for Student 2
  { idTodo: 5, idStudent: 2, deadlineTime: '23:00', deadlineDay: '09/04/2025', todoContent: 'Làm bài kiểm tra giữa kỳ Nhập môn mạng' },
  { idTodo: 6, idStudent: 2, deadlineTime: '22:00', deadlineDay: '11/04/2025', todoContent: 'Hoàn thành project Lập trình trực quan' },
  { idTodo: 7, idStudent: 2, deadlineTime: '19:00', deadlineDay: '14/04/2025', todoContent: 'Chuẩn bị tài liệu Cơ sở dữ liệu' },
  { idTodo: 8, idStudent: 2, deadlineTime: '20:30', deadlineDay: '16/04/2025', todoContent: 'Làm báo cáo bài tập lớn Hệ điều hành' },
];

export { students, subjects, todolists };
