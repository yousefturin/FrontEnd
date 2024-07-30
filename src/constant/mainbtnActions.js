const mainBtnActions = [
    {
        logoId: "borrowBookSvg",
        title: "Borrow Book",
        actionType: "borrow",
        fields: [
            {
                id: "bookId",
                label: "Book ID",
                type: "text",
                placeholder: "Enter book ID",
                required: true,
                readOnly: false
            },
            {
                id: "memberId",
                label: "Member ID",
                type: "text",
                placeholder: "Enter member ID",
                required: true,
                readOnly: false
            },
            {
                id: "workerId",
                label: "Worker ID",
                type: "text",
                placeholder: null,
                required: true,
                readOnly: true
            },
            {
                id: "startDate",
                label: "Borrow Date",
                type: "date",
                placeholder: "Enter borrow date",
                required: true,
                readOnly: true
            },
            {
                id: "endDate",
                label: "End Date",
                type: "date",
                placeholder: "Enter end date",
                required: true,
                readOnly: false
            },
            {
                id: "status",
                label: "status",
                type: "text",
                placeholder: null,
                required: true,
                readOnly: true
            },
        ]
    },
    {
        logoId: "returnBookSvg",
        title: "Return Book",
        actionType: "return",
        fields: [
            {
                id: "borrowId",
                label: "Borrow ID",
                type: "text",
                placeholder: "Enter Borrow ID",
                required: true,
                readOnly: false
            },
            {
                id: "bookId",
                label: "Book ID",
                type: "text",
                placeholder: "Enter Book ID",
                required: true,
                readOnly: false
            },
            {
                id:"endDate",
                label: "End Date",
                type: "date",
                placeholder: "Enter end date",
                required: true,
                readOnly: true
            },
            {
                id: "status",
                label: "status",
                type: "text",
                placeholder: null,
                required: true,
                readOnly: true
            },
        ]
    },
    {
        logoId: "addBookSvg",
        title: "Add Book",
        actionType: "",
        fields: [
            {
                id: "Id",
                label: "Book ID",
                type: "text",
                placeholder: "Enter book ID",
                required: true
            },
            {
                id:"publisherId",
                label: "Publisher ID",
                type: "text",
                placeholder: "Enter Publisher ID",
                required: true
            },
            {
                id:"authorId",
                label: "Author ID",
                type: "text",
                placeholder: "Enter Author ID",
                required: true
            },
            {
                id:"title",
                label: "Title",
                type: "text",
                placeholder: "Enter Title of the book",
                required: true
            },
            {
                id:"intro",
                label: "Intro",
                type: "text",
                placeholder: "Enter Intro of the book",
                required: true
            },
            {
                id: "pageNum",
                label: "Page Number",
                type: "number",
                placeholder: "Enter Page Number",
                required: true
            },
            {
                label: "lang",
                type: "text",
                placeholder: "Enter Language of book",
                required: true
            },
            {
                label: "publication",
                type: "text",
                placeholder: "Enter publication year",
                required: true
            },
            {
                label: "category",
                type: "text",
                placeholder: "Enter category of book",
                required: true
            },
            {
                label: "stockNumber",
                type: "number",
                placeholder: "Enter stock number",
                required: true
            },
        ]
    },
    {
        logoId: "addMemberSvg",
        title: "Add Member",
        actionType: "",
        fields: [
            {
                label: "Book ID",
                type: "text",
                placeholder: "Enter book ID",
                required: true
            },
            {
                label: "Member ID",
                type: "text",
                placeholder: "Enter member ID",
                required: true
            },
            {
                label: "Borrow Date",
                type: "date",
                placeholder: "Enter borrow date",
                required: true
            },
            {
                label: "Return Date",
                type: "date",
                placeholder: "Enter return date",
                required: true
            },
        ]
    },
    {
        logoId: "addAuthorSvg",
        title: "Add Author",
        actionType: "",
        fields: [
            {
                label: "Book ID",
                type: "text",
                placeholder: "Enter book ID",
                required: true
            },
            {
                label: "Member ID",
                type: "text",
                placeholder: "Enter member ID",
                required: true
            },
            {
                label: "Borrow Date",
                type: "date",
                placeholder: "Enter borrow date",
                required: true
            },
            {
                label: "Return Date",
                type: "date",
                placeholder: "Enter return date",
                required: true
            },
        ]
    },
    {
        logoId: "addPublisherSvg",
        title: "Add Publisher",
        actionType: "",
        fields: [
            {
                label: "Book ID",
                type: "text",
                placeholder: "Enter book ID",
                required: true
            },
            {
                label: "Member ID",
                type: "text",
                placeholder: "Enter member ID",
                required: true
            },
            {
                label: "Borrow Date",
                type: "date",
                placeholder: "Enter borrow date",
                required: true
            },
            {
                label: "Return Date",
                type: "date",
                placeholder: "Enter return date",
                required: true
            },
        ]
    },
];

export { mainBtnActions };