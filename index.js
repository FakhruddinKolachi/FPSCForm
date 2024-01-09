function numberToWordsBillion(number) {
    if (number === 0) {
        return "Zero";
    }

    const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    function convertHundreds(num) {
        if (num >= 100) {
            return units[Math.floor(num / 100)] + " Hundred" + (num % 100 !== 0 ? " " + convertTens(num % 100) : "");
        } else {
            return convertTens(num);
        }
    }

    function convertTens(num) {
        if (num < 10) {
            return units[num];
        } else if (num >= 11 && num <= 19) {
            return teens[num - 10];
        } else {
            return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + units[num % 10] : "");
        }
    }

    const billion = Math.floor(number / 1000000000);
    const million = Math.floor((number % 1000000000) / 1000000);
    const thousand = Math.floor((number % 1000000) / 1000);
    const remainder = number % 1000;

    let result = "";

    if (billion > 0) {
        result += convertHundreds(billion) + " Billion";
    }

    if (million > 0) {
        result += (result !== "" ? " " : "") + convertHundreds(million) + " Million";
    }

    if (thousand > 0) {
        result += (result !== "" ? " " : "") + convertHundreds(thousand) + " Thousand";
    }

    if (remainder > 0) {
        result += (result !== "" ? " " : "") + convertHundreds(remainder);
    }

    return result;
}



document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    var number = document.getElementById("rsInput").value;
    const words = numberToWordsBillion(number);



    // Get form data
    var formData = {
        bankName: document.getElementById("bankNameInput").value,
        bankCode: document.getElementById("bankCodeInput").value,
        district: document.getElementById("districtInput").value,
        candidateName: document.getElementById("candidateNameInput").value,
        cnicNo: document.getElementById("cnicNoInput").value,
        caseNo: document.getElementById("caseNoInput").value,
        postApplied: document.getElementById("postAppliedInput").value,
        rs: document.getElementById("rsInput").value
    };

    // Insert data into respective <p> tags
    document.getElementById("bankName").innerText = formData.bankName;
    document.getElementById("bankCode").innerText = formData.bankCode;
    document.getElementById("district").innerText = formData.district;
    document.getElementById("candidateName").innerText = formData.candidateName;
    document.getElementById("cnicNo").innerText = formData.cnicNo;
    document.getElementById("caseNo").innerText = formData.caseNo;
    document.getElementById("postApplied").innerText = formData.postApplied;
    document.getElementById("rs").innerText = formData.rs;
    document.getElementById("rsInWords").innerText = words;

    document.getElementById("bankName2").innerText = formData.bankName;
    document.getElementById("bankCode2").innerText = formData.bankCode;
    document.getElementById("district2").innerText = formData.district;
    document.getElementById("candidateName2").innerText = formData.candidateName;
    document.getElementById("cnicNo2").innerText = formData.cnicNo;
    document.getElementById("caseNo2").innerText = formData.caseNo;
    document.getElementById("postApplied2").innerText = formData.postApplied;
    document.getElementById("rs2").innerText = formData.rs;
    document.getElementById("rsInWords2").innerText = words;


    document.getElementById("bankName3").innerText = formData.bankName;
    document.getElementById("bankCode3").innerText = formData.bankCode;
    document.getElementById("district3").innerText = formData.district;
    document.getElementById("candidateName3").innerText = formData.candidateName;
    document.getElementById("cnicNo3").innerText = formData.cnicNo;
    document.getElementById("caseNo3").innerText = formData.caseNo;
    document.getElementById("postApplied3").innerText = formData.postApplied;
    document.getElementById("rs3").innerText = formData.rs;
    document.getElementById("rsInWords3").innerText = words;


    document.getElementById("bankName4").innerText = formData.bankName;
    document.getElementById("bankCode4").innerText = formData.bankCode;
    document.getElementById("district4").innerText = formData.district;
    document.getElementById("candidateName4").innerText = formData.candidateName;
    document.getElementById("cnicNo4").innerText = formData.cnicNo;
    document.getElementById("caseNo4").innerText = formData.caseNo;
    document.getElementById("postApplied4").innerText = formData.postApplied;
    document.getElementById("rs4").innerText = formData.rs;
    document.getElementById("rsInWords4").innerText = words;


    document.getElementById("form").style.display = "none";
    document.getElementById("section").style.display = "block";

    window.print();

});
