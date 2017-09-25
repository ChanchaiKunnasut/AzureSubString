var url = 'http://th-api-management.azure-api.net/substring/request/';
          url += form.submission.data.string;
          url += '/';
          url += form.submission.data.index;
          $.ajax({
            url: url,
            beforeSend: function(xhrObj){
              // Request Header
            },
            type: "GET"
          }).done(function(data){
	form.submission ={ data: {
        string: form.submission.data.string,
        index: form.submission.data.index,
    result: data.result,
    number: data.number
  }
};
          }).fail(function(err){
            console.log(err)
          });
        console.log(form.submission);