(function(){
    /* global $nikotama */
    if (typeof $nikotama === 'undefined') {
        return;
    }
    
    // Load Current Memo
    $nikotama.get('../php/get_memo_db.php', function(data){
        var memos = document.createDocumentFragment();
        if (typeof data.length !== 'undefined' &&  data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                // Prepare 1 row of table
                var tr = document.createElement('tr');
                var id = document.createElement('td');
                var text = document.createElement('td');
                id.innerHTML = data[i].id;
                text.innerHTML = data[i].text;
                tr.appendChild(id);
                tr.appendChild(text);
                
                memos.appendChild(tr);
            }
        }
        // Append DOMs
        document.getElementById('memos').appendChild(memos);
    });
    
    // Bind update function to Click event
    document.getElementById('submit').addEventListener('click', function(){
        // Get new value for memo.
        var new_memo = document.getElementById('new_memo').value;
        // Remove symbols
        new_memo = new_memo.replace(/[!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]/g, ' ');

        // Call API to update memo.
        $nikotama.get('../php/update_memo_db.php?memo=' + new_memo, function(data){
            // Reload the Page
            window.location.reload();
        });
    });
})();
