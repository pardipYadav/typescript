interface Info {
    name: string;
    age: number;
    college: string;
}
interface teacherType extends Info {
    subject: string;
}
declare var student: Info;
declare var teacher: teacherType;
