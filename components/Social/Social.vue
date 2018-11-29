<template>
    <div class="Social">
        <ul class="Social-List">
            <li class="Social-Item">
                <a href="#">
                    <img class="Social-Icon" src="./media/vk3.png">
                </a>
            </li>
            <li class="Social-Item">
                <a href="#">
                    <img class="Social-Icon" src="./media/vk3.png">
                </a>
            </li>
            <li class="Social-Item">
                <a href="#">
                    <img class="Social-Icon" src="./media/vk3.png">
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    .Social-List {
        display: flex;
    }

    .Social-Item {
        margin-right: 20px;

        &:last-child {
            margin-right: 0;
        }
    }

    .Social-Icon {
        width: 55px;
        height: 55px;
    }
</style>
