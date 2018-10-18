<template>
    <div>
        <h1>{{title}}</h1>
        <li v-for="post in posts" :key="post.id" >{{post.content}}</li>
        <el-table :data="posts">
            <el-table-column
                prop="id"
                label="ID"></el-table-column>
            <el-table-column
                    prop="content"
                    label="内容"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "test",
        props:['title','posts']
    }
</script>

<style scoped>

</style>
