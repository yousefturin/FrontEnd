const DashboardBtnActions = [
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
                id: "endDate",
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
        actionType: "addBook",
        fields: [
            {
                id: "Id",
                label: "Book ID",
                type: "text",
                placeholder: "Enter book ID",
                required: true
            },
            {
                id: "publisherId",
                label: "Publisher ID",
                type: "text",
                placeholder: "Enter Publisher ID",
                required: true
            },
            {
                id: "authorId",
                label: "Author ID",
                type: "text",
                placeholder: "Enter Author ID",
                required: true
            },
            {
                id: "title",
                label: "Title",
                type: "text",
                placeholder: "Enter Title of the book",
                required: true
            },
            {
                id: "intro",
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
                id: "lang",
                label: "lang",
                type: "text",
                placeholder: "Enter Language of book",
                required: true
            },
            {
                id: "publication",
                label: "publication",
                type: "text",
                placeholder: "Enter publication year",
                required: true
            },
            {
                id: "category",
                label: "category",
                type: "text",
                placeholder: "Enter category of book",
                required: true
            },
            {
                id: "stockNumber",
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
        actionType: "addMember",
        fields: [
            {
                id: "id",
                label: "Member ID",
                type: "text",
                placeholder: "Enter member ID",
                required: true,
                readOnly: false
            },
            {
                id: "fName",
                label: "First Name",
                type: "text",
                placeholder: "Enter Fist Name",
                required: true,
                readOnly: false
            },
            {
                id: "lName",
                label: "Last Name",
                type: "text",
                placeholder: "Enter Last Name",
                required: true,
                readOnly: false
            },
            {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "Enter Email",
                required: true,
                readOnly: false
            },
            {
                id: "address",
                label: "address",
                type: "text",
                placeholder: "Enter Email",
                required: true,
                readOnly: false,
                data: [
                    {
                        id: "country",
                        label: "Country",
                        type: "text",
                        placeholder: "Enter Country",
                        required: true,
                        readOnly: false,
                    },
                    {
                        id: "city",
                        label: "city",
                        type: "text",
                        placeholder: "Enter city",
                        required: true,
                        readOnly: false,
                    },
                    {
                        id: "address",
                        label: "address",
                        type: "text",
                        placeholder: "Enter address",
                        required: true,
                        readOnly: false,
                    },
                    {
                        id: "buildNum",
                        label: "Building",
                        type: "text",
                        placeholder: "Enter Building Number",
                        required: true,
                        readOnly: false,
                    },
                    {
                        id: "floorNum",
                        label: "Floor",
                        type: "text",
                        placeholder: "Enter Floor Number",
                        required: true,
                        readOnly: false,
                    },
                    {
                        id: "doorNum",
                        label: "Door",
                        type: "text",
                        placeholder: "Enter Door Number",
                        required: true,
                        readOnly: false,
                    },
                ]
            },
            {
                id: "contact",
                label: "contact",
                type: "text",
                placeholder: "Enter contact",
                required: true,
                readOnly: false,
                data: [
                    {
                        id: "phoneNum",
                        label: "Phone",
                        type: "text",
                        placeholder: "Enter Phone Number",
                        required: true,
                        readOnly: false,
                    },
                    {
                        id: "phoneKey",
                        label: "Key",
                        type: "text",
                        placeholder: "Enter Phone Key",
                        required: true,
                        readOnly: false,
                    }
                ]
            },
        ]
    },
    {
        logoId: "addAuthorSvg",
        title: "Add Author",
        actionType: "",
        fields: [
            {
                id: "fName",
                label: "First Name",
                type: "text",
                placeholder: "Enter Fist Name",
                required: true,
                readOnly: false
            },
            {
                id: "lName",
                label: "Last Name",
                type: "text",
                placeholder: "Enter Last Name",
                required: true,
                readOnly: false
            },
            {
                id: "bio",
                label: "Bio",
                type: "text",
                placeholder: "Enter Bio",
                required: true,
                readOnly: false
            },
        ]
    },
    {
        logoId: "addPublisherSvg",
        title: "Add Publisher",
        actionType: "",
        fields: [
            {
                id: "fName",
                label: "First Name",
                type: "text",
                placeholder: "Enter Fist Name",
                required: true,
                readOnly: false
            },
            {
                id: "lName",
                label: "Last Name",
                type: "text",
                placeholder: "Enter Last Name",
                required: true,
                readOnly: false
            },
            {
                id: "bio",
                label: "Bio",
                type: "text",
                placeholder: "Enter Bio",
                required: true,
                readOnly: false
            },
        ]
    },
];



const BookBtnActions = [
    {
        logoId: "addBookSvg",
        title: "Add Book",
        actionType: "addBook",
        fields: [
            {
                id: "Id",
                label: "Book ID",
                type: "text",
                placeholder: "Enter book ID",
                required: true
            },
            {
                id: "publisherId",
                label: "Publisher ID",
                type: "text",
                placeholder: "Enter Publisher ID",
                required: true
            },
            {
                id: "authorId",
                label: "Author ID",
                type: "text",
                placeholder: "Enter Author ID",
                required: true
            },
            {
                id: "title",
                label: "Title",
                type: "text",
                placeholder: "Enter Title of the book",
                required: true
            },
            {
                id: "intro",
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
                id: "lang",
                label: "lang",
                type: "text",
                placeholder: "Enter Language of book",
                required: true
            },
            {
                id: "publication",
                label: "publication",
                type: "text",
                placeholder: "Enter publication year",
                required: true
            },
            {
                id: "category",
                label: "category",
                type: "text",
                placeholder: "Enter category of book",
                required: true
            },
            {
                id: "stockNumber",
                label: "stockNumber",
                type: "number",
                placeholder: "Enter stock number",
                required: true
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
                id: "endDate",
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
        logoId: "deleteBookSvg",
        title: "Delete Book",
        actionType: "deleteBook",
        fields: [
            {
                id: "id",
                label: "Book ID",
                type: "text",
                placeholder: "Enter Book ID",
                required: true,
                readOnly: false
            }
        ]
    },
    {
        logoId: "updateBookSvg",
        title: "Update Book",
        actionType: "updateBook",
        fields: [
            {
                id: "Id",
                label: "Book ID",
                type: "text",
                placeholder: "Enter book ID",
                required: true
            },
            {
                id: "publisherId",
                label: "Publisher ID",
                type: "text",
                placeholder: "Enter Publisher ID",
                required: true
            },
            {
                id: "authorId",
                label: "Author ID",
                type: "text",
                placeholder: "Enter Author ID",
                required: true
            },
            {
                id: "title",
                label: "Title",
                type: "text",
                placeholder: "Enter Title of the book",
                required: true
            },
            {
                id: "intro",
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
                id: "lang",
                label: "lang",
                type: "text",
                placeholder: "Enter Language of book",
                required: true
            },
            {
                id: "publication",
                label: "publication",
                type: "text",
                placeholder: "Enter publication year",
                required: true
            },
            {
                id: "category",
                label: "category",
                type: "text",
                placeholder: "Enter category of book",
                required: true
            },
            {
                id: "stockNumber",
                label: "stockNumber",
                type: "number",
                placeholder: "Enter stock number",
                required: true
            },
        ]
    },
    {
        logoId: "updateBookstockSvg",
        title: "Update Stock",
        actionType: "updateStock",
        fields: [
            {
                id: "Id",
                label: "Book ID",
                type: "text",
                placeholder: "Enter Book ID",
                required: true,
                readOnly: false
            },
            {
                id: "stockNumber",
                label: "Stock Number",
                type: "number",
                placeholder: "Enter Stock Number",
                required: true,
                readOnly: false
            },
        ]
    },
];


const MemberBtnActions = [
    {
        logoId: "addMemberSvg",
        title: "Add Member",
        actionType: "addMember",
        fields: [
            {
                id: "id",
                label: "Member ID",
                type: "text",
                placeholder: "Enter member ID",
                required: true,
                readOnly: false
            },
            {
                id: "fName",
                label: "First Name",
                type: "text",
                placeholder: "Enter Fist Name",
                required: true,
                readOnly: false
            },
            {
                id: "lName",
                label: "Last Name",
                type: "text",
                placeholder: "Enter Last Name",
                required: true,
                readOnly: false
            },
            {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "Enter Email",
                required: true,
                readOnly: false
            },
            {
                id: "address",
                label: "address",
                type: "text",
                placeholder: "Enter Email",
                required: true,
                readOnly: false,
                data: [
                    {
                        id: "country",
                        label: "Country",
                        type: "text",
                        placeholder: "Enter Country",
                        required: true,
                        readOnly: false,
                    },
                    {
                        id: "city",
                        label: "city",
                        type: "text",
                        placeholder: "Enter city",
                        required: true,
                        readOnly: false,
                    },
                    {
                        id: "address",
                        label: "address",
                        type: "text",
                        placeholder: "Enter address",
                        required: true,
                        readOnly: false,
                    },
                    {
                        id: "buildNum",
                        label: "Building",
                        type: "text",
                        placeholder: "Enter Building Number",
                        required: true,
                        readOnly: false,
                    },
                    {
                        id: "floorNum",
                        label: "Floor",
                        type: "text",
                        placeholder: "Enter Floor Number",
                        required: true,
                        readOnly: false,
                    },
                    {
                        id: "doorNum",
                        label: "Door",
                        type: "text",
                        placeholder: "Enter Door Number",
                        required: true,
                        readOnly: false,
                    },
                ]
            },
            {
                id: "contact",
                label: "contact",
                type: "text",
                placeholder: "Enter contact",
                required: true,
                readOnly: false,
                data: [
                    {
                        id: "phoneNum",
                        label: "Phone",
                        type: "text",
                        placeholder: "Enter Phone Number",
                        required: true,
                        readOnly: false,
                    },
                    {
                        id: "phoneKey",
                        label: "Key",
                        type: "text",
                        placeholder: "Enter Phone Key",
                        required: true,
                        readOnly: false,
                    }
                ]
            },
        ]
    },

    {
        logoId: "updateMemberSvg",
        title: "Update Member",
        actionType: "updateMember",
        fields: [
            {
                id: "id",
                label: "Member ID",
                type: "text",
                placeholder: "Enter member ID",
                required: true,
                readOnly: false
            },
            {
                id: "addressId",
                label: "Address ID",
                type: "text",
                placeholder: "Enter Address ID",
                required: true,
                readOnly: false
            },
            {
                id: "contactId",
                label: "Contact ID",
                type: "text",
                placeholder: "Enter Contact ID",
                required: true,
                readOnly: false
            },
            {
                id: "fName",
                label: "First Name",
                type: "text",
                placeholder: "Enter Fist Name",
                required: true,
                readOnly: false
            },
            {
                id: "lName",
                label: "Last Name",
                type: "text",
                placeholder: "Enter Last Name",
                required: true,
                readOnly: false
            },
            {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "Enter Email",
                required: true,
                readOnly: false
            },
        ]
    },

    {
        logoId: "deleteMemberSvg",
        title: "Delete Member",
        actionType: "deleteMember",
        fields: [
            {
                id: "memberId",
                label: "Member ID",
                type: "text",
                placeholder: "Enter Member ID",
                required: true,
                readOnly: false
            },
        ]
    },
    {
        logoId: "updateMemberAddressSvg",
        title: "Update Address",
        actionType: "updateAddress",
        fields: [
            {
                id: "id",
                label: "id",
                type: "text",
                placeholder: "Enter Address Id",
                required: true,
                readOnly: false
            },
            {
                id: "country",
                label: "Country",
                type: "text",
                placeholder: "Enter Country",
                required: true,
                readOnly: false,
            },
            {
                id: "city",
                label: "city",
                type: "text",
                placeholder: "Enter city",
                required: true,
                readOnly: false,
            },
            {
                id: "address",
                label: "address",
                type: "text",
                placeholder: "Enter address",
                required: true,
                readOnly: false,
            },
            {
                id: "buildNum",
                label: "Building",
                type: "text",
                placeholder: "Enter Building Number",
                required: true,
                readOnly: false,
            },
            {
                id: "floorNum",
                label: "Floor",
                type: "text",
                placeholder: "Enter Floor Number",
                required: true,
                readOnly: false,
            },
            {
                id: "doorNum",
                label: "Door",
                type: "text",
                placeholder: "Enter Door Number",
                required: true,
                readOnly: false,
            },
        ]
    },
    {
        logoId: "updateMemberContactSvg",
        title: "Update Contact",
        actionType: "updateContact",
        fields: [
            {
                id: "Id",
                label: "Contact ID",
                type: "text",
                placeholder: "Enter Contact ID",
                required: true
            },
            {
                id: "phoneNum",
                label: "Phone",
                type: "text",
                placeholder: "Enter Phone Number",
                required: true,
                readOnly: false,
            },
            {
                id: "phoneKey",
                label: "Key",
                type: "text",
                placeholder: "Enter Phone Key",
                required: true,
                readOnly: false,
            }
        ]
    },
];

const AuthorBtnActions = [
    {
        logoId: "addAuthorSvg",
        title: "Add Author",
        actionType: "addAuthor",
        fields: [
            {
                id: "id",
                label: "Author ID",
                type: "text",
                placeholder: "Enter Author ID",
                required: true,
                readOnly: false
            },
            {
                id: "fName",
                label: "First Name",
                type: "text",
                placeholder: "Enter Fist Name",
                required: true,
                readOnly: false
            },
            {
                id: "lName",
                label: "Last Name",
                type: "text",
                placeholder: "Enter Last Name",
                required: true,
                readOnly: false
            },
            {
                id: "bio",
                label: "Bio",
                type: "text",
                placeholder: "Enter Bio",
                required: true,
                readOnly: false
            },
        ]
    },
    {
        logoId: "updateAuthorSvg",
        title: "Update Author",
        actionType: "updateAuthor",
        fields: [
            {
                id: "id",
                label: "Author ID",
                type: "text",
                placeholder: "Enter Author ID",
                required: true,
                readOnly: false
            },
            {
                id: "fName",
                label: "First Name",
                type: "text",
                placeholder: "Enter Fist Name",
                required: true,
                readOnly: false
            },
            {
                id: "lName",
                label: "Last Name",
                type: "text",
                placeholder: "Enter Last Name",
                required: true,
                readOnly: false
            },
            {
                id: "bio",
                label: "Bio",
                type: "text",
                placeholder: "Enter Bio",
                required: true,
                readOnly: false
            },
        ]
    },
];
const PublisherBtnActions = [
    {
        logoId: "addPublisherSvg",
        title: "Add Publisher",
        actionType: "addPublisher",
        fields: [
            {
                id: "id",
                label: "Publisher ID",
                type: "text",
                placeholder: "Enter Publisher ID",
                required: true,
                readOnly: false
            },
            {
                id: "fName",
                label: "First Name",
                type: "text",
                placeholder: "Enter Fist Name",
                required: true,
                readOnly: false
            },
            {
                id: "lName",
                label: "Last Name",
                type: "text",
                placeholder: "Enter Last Name",
                required: true,
                readOnly: false
            },
            {
                id: "bio",
                label: "Bio",
                type: "text",
                placeholder: "Enter Bio",
                required: true,
                readOnly: false
            },
        ]
    },
    {
        logoId: "updatePublisherSvg",
        title: "Update Publisher",
        actionType: "updatePublisher",
        fields: [
            {
                id: "id",
                label: "Author ID",
                type: "text",
                placeholder: "Enter Publisher ID",
                required: true,
                readOnly: false
            },
            {
                id: "fName",
                label: "First Name",
                type: "text",
                placeholder: "Enter Fist Name",
                required: true,
                readOnly: false
            },
            {
                id: "lName",
                label: "Last Name",
                type: "text",
                placeholder: "Enter Last Name",
                required: true,
                readOnly: false
            },
            {
                id: "bio",
                label: "Bio",
                type: "text",
                placeholder: "Enter Bio",
                required: true,
                readOnly: false
            },
        ]
    },
];
export { DashboardBtnActions, BookBtnActions, MemberBtnActions, AuthorBtnActions, PublisherBtnActions };