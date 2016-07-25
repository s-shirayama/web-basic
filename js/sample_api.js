(function(){
    /* global $nikotama */
    if (typeof $nikotama === 'undefined') {
        return;
    }
    
    // Load Current Memo
    $nikotama.get('../php/get_memo.php', function(data){
        var memo = 'Failed to load memo';
        if (typeof data.memo !== 'undefined') {
            memo = data.memo;
        }
        // Update HTML
        document.getElementById('current_memo').innerHTML = memo;
    });
    
    // Bind update function to Click event
    document.getElementById('submit').addEventListener('click', function(){
        // Get new value for memo.
        var new_memo = document.getElementById('new_memo').value;
        // Remove symbols
        new_memo = new_memo.replace(/[!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]/g, ' ');

        // Call API to update memo.
        $nikotama.get('../php/update_memo.php?memo=' + new_memo, function(data){
            // Reload the Page
            window.location.reload();
        });
    });
})();