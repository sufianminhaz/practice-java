// একটি calculateGrade() ফাংশন লিখো, যা একটি নম্বর ইনপুট নিলে নিচের শর্ত অনুসারে গ্রেড রিটার্ন করবে:

// নম্বর	গ্রেড
// 80-100	A+
// 70-79	A
// 60-69	A-
// 50-59	B
// 40-49	C
// 33-39	D
// 0-32	F
// 📥 Input:
// ফাংশনটি একটি সংখ্যা ইনপুট নেবে।

// 🚀 Output:
// গ্রেড একটি স্ট্রিং আকারে রিটার্ন করবে।
// যদি ইনপুট সংখ্যা না হয় বা ০-১০০ রেঞ্জের বাইরে হয়, তাহলে "Invalid" রিটার্ন করবে।







function calculateGrade(point){
    if( typeof point !== 'number' || point >100 ){
        return 'invalid';
    }
    if(point >= 80){
        return 'A+';
    }
    if(point >= 70 && point < 80 ){
        return 'A';
    }
    if(point >= 60 && point < 70){
        return 'A-'
    }
    if(point >= 50 && point < 60){
        return 'B'
    }
    if(point >= 40 && point < 50){
        return 'C'
    }
    if(point >= 33 && point < 40){
        return 'D'
    }
    if(point >= 0 && point < 33){
        return 'F'
    }
    
}
    
const minu =(calculateGrade('minu'))
console.log(minu)

