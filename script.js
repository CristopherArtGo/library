let sideBarClosed = true;

function toggleSideBar() {
    if (sideBarClosed == true)
    {
        document.getElementById("toggleBtn").style.transform = "rotate(45deg)";
        document.getElementById("sideBar").style.right = "0px";
        sideBarClosed = false;
    }
    else {
        document.getElementById("toggleBtn").style.transform = "rotate(0deg)";
        document.getElementById("sideBar").style.right = "-300px";
        sideBarClosed = true;
    }
    return;
}

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

const atomicHabits = new Book("Atomic Habits", "James Clear", 300, "already read");
console.log(atomicHabits.info());