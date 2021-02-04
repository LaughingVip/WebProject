<script>
export default {
  name: "Contents",
  props: {
    contents: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  render() {
    return (
      <div>
        {this.contents.map((item, index) => {
          return item.isActive ? (
            <div class="content">{item.$slots.default}</div>
          ) : (
            ""
          );
        })}
      </div>
    );
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: auto;
  padding: 0 0.32rem;
}
</style>