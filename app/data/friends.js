var friendsArray = [
    {
        name: "Jennifer Anniston 'Rachel'",// "./images/  " for images instead of https.
        photo: "https://www.google.com/search?sa=X&biw=1431&bih=680&q=Jennifer+Aniston&stick=H4sIAAAAAAAAAONgFuLQz9U3MDZIrlACsywrizK0xLKTrfRLyoAovqAoP70oMdcqObG45BGjL7fAyx_3hKVcJq05eY3RjguHQiEVLjbXvJLMkkohKS4eKbgVGgxSXFxwHs8iVp60oszUvJRiBZAuAMWTvYmNAAAA&ved=0ahUKEwi0t_jJyLfhAhVF0oMKHRKYCxkQ-BYILDA4",
        scores: [5, 1, 3, 4, 5, 3, 5, 2, 5, 1]
    },
    {
        name: "Matthew Perry 'Chandler'",
        photo: "https://www.google.com/search?sa=X&biw=1431&bih=680&q=Matthew+Perry&stick=H4sIAAAAAAAAAONgFuLQz9U3MDZIrlDiBLEMMyqKTbTEspOt9EvKgCi-oCg_vSgx1yo5sbjkEaMvt8DLH_eEpVwmrTl5jdGOC4dCIRUuNte8ksySSiEpLh4puB0aDFJcXHAezyJWnrSizNS8lGIFkC4A_ByaB44AAAA&ved=0ahUKEwi0t_jJyLfhAhVF0oMKHRKYCxkQ-BYILzA5",
        scores: [4, 1, 2, 4, 5, 1, 5, 2, 4, 1]
    },
    {
        name: "Courtney Cox 'Monica'",
        photo: "https://www.google.com/search?sa=X&biw=1431&bih=680&q=Courteney+Cox&stick=H4sIAAAAAAAAAONgFuLQz9U3MDZIrlDiBLEMi4os07TEspOt9EvKgCi-oCg_vSgx1yo5sbjkEaMvt8DLH_eEpVwmrTl5jdGOC4dCIRUuNte8ksySSiEpLh4puB0aDFJcXHAezyJWnrSizNS8lGIFkC4AieMQ0I4AAAA&ved=0ahUKEwi0t_jJyLfhAhVF0oMKHRKYCxkQ-BYIMjA6",
        scores: [1, 1, 4, 3, 4, 2, 5, 4, 2, 3]
    },
    {
        name: "Matt LeBlanc 'Joey'",
        photo: "https://www.google.com/search?sa=X&biw=1431&bih=680&q=Matt+LeBlanc&stick=H4sIAAAAAAAAAONgFuLQz9U3MDZIrlDiBLEMi4pSTLTEspOt9EvKgCi-oCg_vSgx1yo5sbjkEaMvt8DLH_eEpVwmrTl5jdGOC4dCIRUuNte8ksySSiEpLh4puB0aDFJcXHAezyJWnrSizNS8lGIFkC4AYxF23Y4AAAA&ved=0ahUKEwi0t_jJyLfhAhVF0oMKHRKYCxkQ-BYINTA7",
        scores: [2, 5, 2, 4, 3, 3, 4, 2, 3, 5]
    },
    {
        name: "Lisa Kudrow 'Phoebe'",
        photo: "https://www.google.com/search?sa=X&biw=1431&bih=680&q=Lisa+Kudrow&stick=H4sIAAAAAAAAAONgFuLQz9U3MDZIrlDiBLEMzUqSzLXEspOt9EvKgCi-oCg_vSgx1yo5sbjkEaMvt8DLH_eEpVwmrTl5jdGOC4dCIRUuNte8ksySSiEpLh4puB0aDFJcXHAezyJWnrSizNS8lGIFkC4AZOB9Ao4AAAA&ved=0ahUKEwi0t_jJyLfhAhVF0oMKHRKYCxkQ-BYIODA8",
        scores: [2, 1, 3, 4, 4, 3, 4, 5, 5, 1]
    },
    {
        name: "David Schwimmer 'Ross'",
        photo: "https://www.google.com/search?sa=X&biw=1431&bih=680&q=David+Schwimmer&stick=H4sIAAAAAAAAAONgFuLQz9U3MDZIrlDiBLEMzUqSirTEspOt9EvKgCi-oCg_vSgx1yo5sbjkEaMvt8DLH_eEpVwmrTl5jdGOC4dCIRUuNte8ksySSiEpLh4puB0aDFJcXHAezyJWnrSizNS8lGIFkC4A0anDTY4AAAA&ved=0ahUKEwi0t_jJyLfhAhVF0oMKHRKYCxkQ-BYIOzA9",
        scores: [1, 1, 1, 2, 3, 2, 3, 1, 5, 2]
    },
    {
        name: "Paul Rudd 'Mike'",
        photo: "https://www.google.com/search?sa=X&biw=1431&bih=680&q=Paul+Rudd&stick=H4sIAAAAAAAAAONgFuLQz9U3MDZIrlDiBLOMyi0ytMSyk630S8qAKL6gKD-9KDHXKjmxuOQRoy-3wMsf94SlXCatOXmN0Y4Lh0IhFS4217ySzJJKISkuHim4HRoMUlxccB7PIlaetKLM1LyUYgWQLgCb3RgyjgAAAA&ved=0ahUKEwi0t_jJyLfhAhVF0oMKHRKYCxkQ-BYIQTA_",
        scores: [4, 3, 3, 2, 3, 4, 5, 5, 5, 5]
    },
    {
        name: "Maggie Wheeler 'Janice'",
        photo: "https://www.google.com/search?sa=X&biw=1431&bih=680&q=Maggie+Wheeler&stick=H4sIAAAAAAAAAONgFuLQz9U3MDZIrlDiBLNyikzytMSyk630S8qAKL6gKD-9KDHXKjmxuOQRoy-3wMsf94SlXCatOXmN0Y4Lh0IhFS4217ySzJJKISkuHim4HRoMUlxccB7PIlaetKLM1LyUYgWQLgCrEp6cjgAAAA&ved=0ahUKEwi0t_jJyLfhAhVF0oMKHRKYCxkQ-BYIdDBQ",
        scores: [5, 4, 5, 2, 3, 2, 5, 1, 3, 1]
    },
    {
        name: "James Michael Tyler 'Gunther'",
        photo: "https://www.google.com/search?sa=X&biw=1431&bih=680&q=James+Michael+Tyler&stick=H4sIAAAAAAAAAONgFuLQz9U3MDZIrlDiBLPKK0zStcSyk630S8qAKL6gKD-9KDHXKjmxuOQRoy-3wMsf94SlXCatOXmN0Y4Lh0IhFS4217ySzJJKISkuHim4HRoMUlxccB7PIlaetKLM1LyUYgWQLgDLn-3MjgAAAA&ved=0ahUKEwi0t_jJyLfhAhVF0oMKHRKYCxkQ-BYIejBS",
        scores: [1, 5, 1, 2, 1, 1, 2, 5, 5, 1]
    },
    {
        name: "Larry Hankin 'Mr. Heckles'",
        photo: "https://www.google.com/search?sa=X&biw=1431&bih=680&q=Larry+Hankin&stick=H4sIAAAAAAAAAONgFuLQz9U3MDZIrlDiBLEyDOLNcrXEspOt9EvKgCi-oCg_vSgx1yo5sbjkEaMvt8DLH_eEpVwmrTl5jdGOC4dCIRUuNte8ksySSiEpLh4puB0aDFJcXHAezyJWnrSizNS8lGIFkC4Ak0uPT44AAAA&ved=0ahUKEwi0t_jJyLfhAhVF0oMKHRKYCxkQ-BYIpAEwYA",
        scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    }

]

module.exports = friendsArray;
