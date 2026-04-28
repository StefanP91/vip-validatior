$form.on('submit', event => {
    this.addToCartValidator.performCheck();

    // VIP BLOCK
    const isVipOnly = this.context.vipOnly === true;
    const isGuest = !this.context.customer;

    if (isVipOnly && isGuest) {
        event.preventDefault();
        event.stopImmediatePropagation();

        const modal = modalFactory('#previewModal')[0];
        modal.open({ size: 'small' });
        modal.updateContent(`
            <div class="modal-header" style="padding: 15px; text-align: center;">
                <h2 class="modal-header-title">Exclusive Product</h2>
            </div>
            <div class="modal-body" style="text-align: center; padding: 20px;">
                <p>This product is exclusive to registered users. Please log in to continue.</p>
                <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 10px;">
                    <a href="/login.php" class="button button--primary">Login</a>
                    <a href="/login.php?action=create_account" class="button">Register</a>
                </div>
            </div>
        `);

        return false;
    }
    // END VIP BLOCK

    if (this.addToCartValidator.areAll('valid')) {
        this.addProductToCart(event, $form[0]);
    }
});